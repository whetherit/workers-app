export default class Worker {
	constructor(name, surname, lastName, workStart, birthDate, post) {
		this.name = name
		this.surname = surname
		this.lastName = lastName
		this.workStart = workStart
		this.birthDate = birthDate
		this.post = post
	}

	get fio() {
		return this.surname + " " + this.name + " " + this.lastName
	}

	getWorkPeriod() {
		const currentTime = new Date()
		return currentTime.getFullYear() - this.workStart
	}

	getBirthDateString() {
		const yyyy = this.birthDate.getFullYear()
		let mm = this.birthDate.getMonth() + 1
		let dd = this.birthDate.getDate()

		if (dd < 10) dd = "0" + dd
		if (mm < 10) mm = "0" + mm

		return dd + "." + mm + "." + yyyy
	}

	getAge() {
		const today = new Date()
		let age = today.getFullYear() - this.birthDate.getFullYear()
		let m = today.getMonth() - this.birthDate.getMonth()
		if (m < 0 || (m === 0 && today.getDay() < this.birthDate.getDate())) {
			age--
		}

		return age
	}
}
