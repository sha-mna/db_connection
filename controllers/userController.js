exports.loginPage = (req,res) => {

    console.log("loginnnnn");
    const dir = __dirname;
    const root = dir.split("\\");
    root.pop();
    const rootStr = root.join('\\');
    console.log(rootStr);
    res.sendFile(rootStr + '/index.html');
}

exports.loginPost = (req,res) => {
    console.log(req.body);

    const newPost = new Post({
        title:req.body.title,
        content:req.body.content
    });

    newPost.save();

    res.send("Form submitted")
};

