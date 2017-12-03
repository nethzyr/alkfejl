export class User {
    public id: number;
    public firstName: String;
    public lastName: String;
    public password: String;
    public role: String;
    public username: String;

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
        this.role = role || '';
        this.username = username || '';
    }
}
