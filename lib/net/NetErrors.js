export class NetErrorNotAuthorized {
    name = 'NetErrorNotAuthorized';
    constructor(message = 'Caller is Not Authorized, or Token Invalid!') {
        this.message = message;
    }
}

export class NetErrorInvalidCredentials {
    name = 'NetErrorInvalidCredentials';
    constructor(message = 'Invalid Credentials!') {
        this.message = message;
    }
}

export class NetErrorMissingConfiguration {
    name = 'NetErrorMissingConfiguration';
    constructor(message = 'Required Configuration Missing!') {
        this.message = message;
    }
}

export class NetErrorNotificationPermissionDenied {
    name = 'NetErrorNotificationPermissionDenied';
    constructor( message = 'User has denied Push Notification Permission!') {
        this.message = message;
    }
}