export const testScreen = (req, res) => {
    res.render("base")
};

export const mainController = (req, res) => {
    const loginFlog = req.userLoginFlag || false;

    let isAuthenticated = false;

    if (loginFlog) {
        isAuthenticated = true;
    }

    if (isAuthenticated) {
        friendsController(req, res);
    } else {
        res.render("main");
    }
};

export const friendsController = (req, res) => {
    res.render("friends")
};

export const messageController = (req, res) => {
    res.render("message")
};

export const profileController = (req, res) => {
    res.render("profile")
};

export const loginController = (req, res) => {
    const input_id = req.body.input_id;
    let input_pass = req.body.input_pass;
    input_pass = String(input_pass);

    if (input_id === "system" && input_pass === "1234") {
        //로그인 성공
        req.userLoginFlag = true;
        mainController(req, res);
    } else {
        //로그인 실패!
        req.userLoginFlag = false;
        mainController(req, res);
    }
};