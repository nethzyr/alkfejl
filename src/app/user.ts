export class User {
    public id: number;
    public firstName: String;
    public lastName: String;
    public password: String;
    public role: String;
    public username: String;
    public firstname = this.firstName;
    public lastname = this.lastName;

    constructor(
        id?: number,
        firstName?: String,
        lastName?: String,
        password?: String,
        role?: String,
        username?: String
    ) {
        this.id = id || 0;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.password = password || '';
        this.role = role || 'GUEST';
        this.username = username || '';
        this.firstname = this.firstName;
        this.lastname = this.lastName;
    }
}
