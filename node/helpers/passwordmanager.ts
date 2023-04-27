import bcrypt from 'bcrypt'
export function passwordChecker(password: string, originalPassword: string){
	 return  bcrypt.compareSync(password, originalPassword)
}
export function passwordGenerator(password: string) {
	const salt = bcrypt.genSaltSync()
	return  bcrypt.hashSync(password, salt)
}