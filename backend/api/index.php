<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $data = ['ok'=>false,'code'=>null,'message'=>null,'result'=>[]];
    $allowed_media = ['jpg','png','jpeg','svg'];
    // call db config
    require_once("../assets/config.php");
    $db = new DB_CONFIG();

    // get api method
    $url = explode("/", $_SERVER['QUERY_STRING']);
    $method = $url[1];
    // url encode
    $data_url = urldecode(file_get_contents('php://input'));
    parse_str($data_url, $params);


    if($method){
        if($method == 'addProduct'){
            if(isset($_POST['productName'])
                && isset($_POST['token'])
                && isset($_POST['cost'])
                && isset($_FILES['img1'])
                && isset($_FILES['img2'])
                && isset($_FILES['img3'])
                && isset($_POST['description'])
                && isset($_POST['category'])
                && isset($_POST['weight'])){
                //check owner in db
                $token = $_POST['token'];
                $slt = $db->selectWhere('users',[
                    'temporary_token'=>$token,
                    'cn'=>'='
                ]);
                if(mysqli_num_rows($slt)>0){
                    // user found start writing datas to db
                    $name = $_POST['productName'];
                    $category = $_POST['category'];
                    $about = $_POST['description'];
                    $weight = $_POST['weight'];
                    $cost= $_POST['cost'];
                    $img1 = $db->escapeString($_FILES['img1']['name']);
                    $img2 = $db->escapeString($_FILES['img2']['name']);
                    $img3 = $db->escapeString($_FILES['img3']['name']);
                    // download media
                    $typeMedia1 = pathinfo($img1, PATHINFO_EXTENSION);
                    $typeMedia2 = pathinfo($img2, PATHINFO_EXTENSION);
                    $typeMedia3 = pathinfo($img3, PATHINFO_EXTENSION);

                    // check file type
                    if(in_array($typeMedia1, $allowed_media)
                        && in_array($typeMedia2, $allowed_media)
                        && in_array($typeMedia3, $allowed_media)){
                        // ckeck file in `images` folder
                        if(file_exists('../assets/images/'.$img1)
                            && file_exists('../assets/images/'.$img2)
                            && file_exists('../assets/images/'.$img3)){
                            // the file is excist in images folder so that give random name for it
                            $img1 = bin2hex(random_bytes(8)) . $img1;
                            $img2 = bin2hex(random_bytes(8)) . $img2;
                            $img3 = bin2hex(random_bytes(8)) . $img3;
                        }
                        // write datas to db and download media
                        $ins = $db->insertInto('products',[
                            'product_name'=>$name,
                            'product_owner'=>$token,
                            'about_product'=>$about,
                            'product_category'=>$category,
                            'weight'=>$weight,
                            'cost'=>$cost,
                            'img1'=>$img1,
                            'img2'=>$img2,
                            'img3'=>$img3,
                        ]);
                        if($ins){
                            move_uploaded_file($_FILES['img1']['tmp_name'], "../assets/images/".$img1);
                            move_uploaded_file($_FILES['img2']['tmp_name'], "../assets/images/".$img2);
                            move_uploaded_file($_FILES['img3']['tmp_name'], "../assets/images/".$img3);

                            $data['ok'] = true;
                            $data['code'] = 200;
                            $data['message'] = "Product successfully added";
                        }else {
                            $data['message'] = 'Service Unavailable | Something wrong went please try again later';
                            $data['code'] = 503;
                        }

                    } else {
                        $data['message'] = 'File type is not allowed';
                        $data['ok'] = 403;
                    }

                } else {
                    $data['message'] = 'User not found, Adding product is forbidden';
                    $data['code'] = 403;
                }

            } else {
                $data['message'] = "There are no all required datas";
                $data['code'] = 404;
            }
        }
        else if($method == 'signup'){
            if(isset($params['name']) && isset($params['username']) && isset($params['phone']) && isset($params['email']) && isset($params['password'])){
                    $name = $db->escapeString($params['name']);
                    $username = $db->escapeString($params['username']);
                    $phone = $db->escapeString($params['phone']);
                    $email = $db->escapeString($params['email']);
                    $pass = $db->escapeString($params['password']);
                    $token = bin2hex(random_bytes(32));
                    // check db for username and phone
                    $slt = $db->selectWhere('users',[
                            [
                                'username'=>$username,
                                'cn'=>'='
                            ],
                            [
                                'phone'=>$phone,
                                'cn'=>'='
                            ],
                            [
                                'email'=>$email,
                                'cn'=>'='
                            ],
                        ]
                    );
                    if(!$slt->num_rows>0){
                        $pass = md5($pass);
                        $ins = $db->insertInto('users',[
                            'name'=>$name,
                            'username'=>$username,
                            'phone'=>$phone,
                            'email'=>$email,
                            'password'=>$pass,
                            'temporary_token'=>$token
                        ]);
                        if($ins){
                            $data['ok'] = true;
                            $data['code'] = 200;
                            $data['message'] = "User successfully registered";
                            $data['result'][] = $token;
                        } else {
                            $data['code'] = 503;
                            $data['message'] = "Service Unavailable | Something wrong wnt try again later";
                        }
                    }
                    else {
                        $data['code'] = 406;
                        $data['message'] = "username or phone is already token";
                    }
            }
            else {
                $data['code'] = 404;
                $data['message'] = "There are not all reqired datas";
            }
        }
        else if($method == 'login') {
            if(isset($_POST['email']) && isset($_POST['password'])){
                $email = $db->escapeString($_POST['email']);
                $password = $db->escapeString($_POST['password']);
                $password = md5($password);

                // check db for user
                $check = $db->selectWhere('users',
                    [
                        [
                            'password'=>$password,
                            'cn'=>'=',
                        ],
                        [
                            'email'=>$email,
                            'cn'=>'='
                        ]
                    ]
                );
                if($check->num_rows>0){
                    foreach ($check as $key => $value) {
                        $data['result'][] = $value;
                    }
                    $data['ok'] = true;
                    $data['code'] = 200;
                    $data['message'] = "User found";
                } else {
                    $data['code'] = 404;
                    $data['message'] = 'Email or password is not suitable';
                }
            } else {
                $data['code'] = 404;
                $data['message'] = "Email and password are required";
            }
        }
        else if($method == 'getAllProducts'){
            $all = $db->selectAll('products');
            if($all->num_rows > 0){
                $data['ok'] = true;
                $data['code'] = 200;
                $data['message'] = "Product found";
                foreach ($all as $key => $val){
                    $data['result'] = $val;
                }
            } else {
                $data['code'] = 404;
                $data['message'] = "Product not found";
            }
        }
        else if($method == 'getInfoProduct'){
            if(isset($_POST['id'])){
                $id = $db->escapeString($_POST['id']);
                $info = $db->selectWhere('products',
                    [
                        [
                            'id'=>$id,
                            'cn'=>'='
                        ]
                    ]
                );
                if($info->num_rows > 0){
                    $data['ok'] = true;
                    $data['code'] = 200;
                    $data['message'] = "Product info";
                    foreach ($info as $key => $val){
                        $data['result'][] = $val;
                    }
                } else {
                    $data['code'] = 404;
                    $data['message'] = "Product not found";
                }
            }
        }
        else if($method == 'getProfileInfo'){
            if(isset($_POST['token'])){
                $token = $db->escapeString($_POST['token']);
                $getinfo = $db->selectWhere('users',
                    [
                        [
                            'temporary_token'=>$token,
                            'cn'=>'='
                        ]
                    ]
                );
                if($getinfo->num_rows > 0){
                    $data['ok'] = true;
                    $data['code'] = 200;
                    $data['message'] = "User found";
                    foreach ($getinfo as $key => $val){
                        $data['result'][] = $val;
                    }
                } else {
                    $data['code'] = 404;
                    $data['message'] = "User not found | Please redirect to login page!!!";
                }
            }
        }
        else if($method == 'getProductsByUser'){
            if(isset($_POST['token'])) {
                $token = $db->escapeString($_POST['token']);
                //check db(users) for token
                $check = $db->selectWhere('users',
                    [
                        [
                            'token'=>$token,
                            'cn'=>'='
                        ]
                    ]
                );
                if($check->num_rows > 0){
                    $check = $db->selectWhere('products',
                       [
                           [
                               'product_owner'=>$token,
                               'cn'=>'='
                           ]
                       ]
                    );
                    if($check->num_rows>0){
                        $data['ok'] = true;
                        $data['code'] = 200;
                        $data['message'] = "Product found for this user";
                        foreach ($check as $key => $val){
                            $data['result'][] = $val;
                        }
                    } else {
                        $data['code'] = 404;
                        $data['message'] = "This user doesn't have any product";
                    }
                } else {
                    $data['code'] = 403;
                    $data['message'] = "This user doesn't found in db | Redirect it to login page!!!";
                }
            }
        }
        else if($method == 'deleteProduct'){
            if(isset($_POST['token']) && isset($_POST['product_id'])){
                $token = $_POST['token'];
                $product_id = $_POST['product_id'];
                // check users table for user
                $slt = $db->selectWhere('users',[
                    [
                        'temporary_token'=>$token,
                        'cn'=>'='
                    ],
                ]);
                if($slt->num_rows > 0) {
                    $slt = $db->selectWhere('products',[
                        [
                            'product_owner'=>$token,
                            'cn'=>'='
                        ],
                    ]);
                    if($slt->num_rows > 0) {
                        $data['ok'] = true;
                        $data['code'] = 200;
                        $data['message'] = "Product deleted";
                    } else {
                        $data['code'] = 404;
                        $data['message'] = "Product not found";
                    }
                } else {
                    $data['code'] = 403;
                    $data['message'] = "User not found | redirect user to login page";
                }
            }
        }
        else if ($method == 'deleteAccount'){
            if(isset($_POST['token'])){
                $token = $_POST['token'];
                $check = $db->selectWhere('users',[
                    [
                        'temporary_token'=>$token,
                        'cn'=>'='
                    ]
                ]);
                if($check->num_rows>0){
                    $del = $db->deleteWhere('users',[
                        [
                            'temporary_token'=>$token,
                            'cn'=>'='
                        ]
                    ]);
                    if($del){
                        $data['code'] = 200;
                        $data['message'] = "User deleted";
                        $db->deleteWhere('products',[
                            [
                                'product_owner'=>$token,
                                'cn'=>'='
                            ]
                        ]);
                    } else {
                        $data['code'] = 503;
                        $data['message'] = "Service unenviable | Please try again later";
                    }
                } else {
                    $data['code'] = 404;
                    $data['message'] = "User not found";
                }
            }
        }
        else if($method == 'search'){
            if(isset($_POST['query'])){
                $query = $_POST['query'];

                $search = $db->withSqlQuery("SELECT * FROM `products` WHERE `product_name` = LIKE %".$query."%");
                if($search->num_rows > 0){
                    $data['ok'] = true;
                    $data['code'] = 200;
                    $data['message'] = "Products by search query";
                    foreach ($search as $key => $val){
                        $data['result'][] = $val;
                    }
                } else {
                    $data['code'] = 404;
                    $data['message'] = "Products not found";
                }
            }
        }
        else if($method == 'updateProfile'){
            if(isset($_POST['name'])
                && isset($_POST['username'])
                && isset($_POST['password'])
                && isset($_POST['city'])
                && isset($_POST['phone'])
                && isset($_POST['token'])
                && isset($_POST['email'])){

                $name = $db->escapeString($_POST['name']);
                $username = $db->escapeString($_POST['username']);
                $phone = $db->escapeString($_POST['phone']);
                $city = $db->escapeString($_POST['city']);
                $email = $db->escapeString($_POST['email']);
                $password = $db->escapeString($_POST['password']);
                $token = $db->escapeString($_POST['token']);
                #check db for user
                $check = $db->selectWhere('users',[
                    [
                        'token'=>$token,
                        'cn'=>'='
                    ],
                ]);
                if($check->num_rows > 0){
                    #update users' data
                    $upd = $db->updateWhere('users',
                        [
                            'username'=>$username,
                            'password'=>$password,
                            'name'=>$name,
                            'city'=>$city,
                            'phone'=>$phone,
                            'email'=>$email
                        ],
                        [
                            'token'=>$token,
                            'cn'=>'='
                        ]
                    );
                    if($upd){
                        $data['ok'] = true;
                        $data['code'] = 200;
                        $data['message'] = "User's datas updated";
                    } else {
                        $data['code'] = 503;
                        $data['message'] = "Service unavailable please try again later";
                    }
                } else {
                    $data['code'] = 404;
                    $data['message'] = "User not found | redirect to login page";
                }
            }
            else {
                $data['code'] = 403;
                $data['message'] = "Forbidden!!!";
            }
        }
    }

    print_r(json_encode($data));
    
?>
