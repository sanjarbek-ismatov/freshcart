import jwt from 'jsonwebtoken'

export  function tokenGenerator(email: string){
	const token =  jwt.sign({email}, process.env.JWT_SECRET || '')
	return token
}