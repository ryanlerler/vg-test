class SumController {
  sumNumbers = async (req, res) => {
    const { a, b } = req.body;
    try {
      if (b === a) {
        return res.status(400).json({
          message: "Please make sure the 2 numbers are different.",
        });
      } else if (b < a) {
        return res.status(400).json({
          message:
            "Please make sure the second number is greater than the first number.",
        });
      } else if (!(a > 0 && a < 100 && b > 0 && b < 100)) {
        return res.status(400).json({
          message: "Please make sure each number is between 0 and 100.",
        });
      } else {
        let sumNumbers = 0;
        for (let i = Number(a); i <= Number(b); i++) {
          sumNumbers += i;
        }
        return res.status(200).json({
          sumNumbers,
        });
      }
    } catch (err) {
      return res.status(400).json(err.message);
    }
  };
}

module.exports = SumController;
