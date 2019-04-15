function generate() {
    // A reasonably "intuitive" way to generate a password:
    var charPos;
    var pwChar;
    var pwLength = 12;  // Change for shorter or longer password

    // 1) You can add special characters like "@" to the following string if desired
    // 2) You can even include characters more than once to increase their likelihood of appearing!
    var availChars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZèéòàù#!£$%&/()=<>+-|";
    var pw = "";
    for (i = 0; i < pwLength; i++) {
        charPos = Math.floor(Math.random() * availChars.length);
        pwChar = availChars.charAt(charPos);
        pw = pw + pwChar;
    }
    pass.value = pw;

}