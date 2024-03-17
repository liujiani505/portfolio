const sendMail = async (req, res) => {
    const body = JSON.parse(req.body);
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message} 
    `;
    const data = {
        to: 'jianiliudev@gmail.com',
        from: 'hello@jianiliu.tech',
        subject: 'New contact form message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
    };

    await mail.send(data);

    res.status(200).json({ status: 'Ok' });
};

export default sendMail;


