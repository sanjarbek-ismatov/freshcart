import jwt from 'jsonwebtoken'

export  function tokenGenerator(email: string){
	const token =  jwt.sign({email}, process.env.KEY || '')
	return token
}
export function tokenParser(token: string){
	try {
		const decoded = jwt.verify(token, process.env.KEY || '')
		return decoded
	} catch (e) {
		return
	}
}