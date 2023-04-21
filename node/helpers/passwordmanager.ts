import bcrypt from 'bcrypt'
export function passwordChecker(password: string, originalPassword: string){
	 const same = bcrypt.compareSync(password, originalPassword)
	 return same
}
export function passwordGenerator(password: string) {
	const salt = bcrypt.genSaltSync()
	const encrypted = bcrypt.hashSync(password, salt)
	return encrypted
}