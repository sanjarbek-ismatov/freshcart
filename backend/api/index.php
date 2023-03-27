<?php
    $data = ['ok'=>false,'code'=>null,'message'=>null,'result'=>[]];
    $allowed_media = ['jpg','png','jpeg','svg'];
    // call db config
    require_once("../assets/config.php");
    $db = new DB_CONFIG();

    // get api method
    $url = explode("/", $_SERVER['QUERY_STRING']);
    $method = $url[1];

    if($method){
        if($method == 'addProduct'){
            if(isset($_REQUEST['productName']) 
                && isset($_REQUEST['token']) 
                && isset($_REQUEST['cost']) 
                && isset($_REQUEST['productOwner']) 
                && isset($_FILES['img1']) 
                && isset($_FILES['img2']) 
                && isset($_FILES['img3']) 
                && isset($_REQUEST['description'])
                && isset($_REQUEST['category'])
                && isset($_REQUEST['weight'])){
                //check owner in db 
                $token = $_REQUEST['token'];
                $slt = $db->selectWhere('users',[
                    'temporary_token'=>$token,
                    'cn'=>'='
                ]);
                if(mysqli_num_rows($slt)>0){
                    // user found start writing datas to db
                    $name = $_REQUEST['productName'];
                    $owner = $_REQUEST['productOwner'];
                    $category = $_REQUEST['category'];
                    $about = $_REQUEST['description'];
                    $weight = $_REQUEST['weight'];
                    $cost= $_REQUEST['cost'];
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
                                'product_owner'=>$owner,
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
        } else if($method == 'signup'){
            if(isset($_REQUEST['name']) 
                && isset($_REQUEST['username']) 
                && isset($_REQUEST['phone']) 
                && isset($_REQUEST['password'])){
                    $name = $_REQUEST['name'];
                    $username = $_REQUEST['username'];
                    $phone = $_REQUEST['phone'];
                    $pass = $_REQUEST['password'];
                    $token = bin2hex(random_bytes(32));
                    // check db for username and phone
                    $slt = $db->selectWhere('users',
                    [
                        'phone'=>$phone,
                        'cn'=>'='
                    ],
                    [
                        'username'=>$username,
                        'cn'=>'='
                    ]);
                    if(mysqli_num_rows($slt)>0){
                        $pass = md5($pass);
                        $ins = $db->insertInto('users',[
                            'name'=>$name,
                            'username'=>$username,
                            'phone'=>$phone,
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
                    }else {
                        $data['code'] = 406;
                        $data['message'] = "username or phone is already token";
                    }
                }
        }
    }

    print_r(json_encode($data));
    
?>
