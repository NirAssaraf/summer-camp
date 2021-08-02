class User {
    constructor( email, name, password,role,isAdmin) {
            this.id="";
            this.name = name;
            this.email =email;
            this.password=password;
            this.role=role;
            this.isAdmin=isAdmin;
    }
}

module.exports = User;