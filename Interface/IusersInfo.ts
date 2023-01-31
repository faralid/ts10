
interface IOrganization {
    name: string,
    position: string
}

export interface IUsersInfo {
        userid: string,
        name: string,
        birthdate: string,
        age: number,
        organization: IOrganization
        }
