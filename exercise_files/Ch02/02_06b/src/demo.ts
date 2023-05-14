interface Contact {
    id: number;
    name: string;
}

interface UserContact<TExternalId {
    id: number,
    name: string,
    username: string,
    externalId: TExternalId,
    loadExternalId(): Task<TExternalId>,
}

function clone<myType, mySecondType extends myType>(source: myType): mySecondType {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, UserContact<string>>(a)

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange)