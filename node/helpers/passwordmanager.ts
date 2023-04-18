import bcrypt from 'bcrypt'
export async function passwordChecker(password: string, originalPassword: string){
	 const same = bcrypt.compare(password, originalPassword, () => {})
	 console.log(same)
}