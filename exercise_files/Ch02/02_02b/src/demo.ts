interface Contact extends Address {
  id: number,
  name: string,
  birthDate?: Date,
}

interface Address {
  line1: string,
  line2?: string,
  city: string,
  state: string,
  zip: number,
}

let primaryContact: Contact = {
  // birthDate: new Date("01-01-1990"),
  id: 123,
  name: "jonshon",
  line1: '123 st',
  city: 'Madison',
  state: 'WI',
  zip: 53719,
}