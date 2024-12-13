class AccessController {
  signUp = async (req, res, next) => {
    try {
      console.log(`signUp::`, req.body);
      return res.status(200).json({
        code: "20001",
        metadata: {
          userid: 1,
        },
      });
    } catch (error) {}
  };
}

module.exports = new AccessController();
