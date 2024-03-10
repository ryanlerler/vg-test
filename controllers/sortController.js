class SortController {
  sortNumbers = async (req, res) => {
    const { input } = req.body;
    try {
      if (!Array.isArray(input)) {
        return res
          .status(400)
          .json({ message: "Please make sure the input is an array." });
      } else if (!input.every((i) => typeof i === "number")) {
        return res
          .status(400)
          .json({
            message: "Please make sure the array consists of only numbers.",
          });
      } else if (input.length !== 10) {
        return res
          .status(400)
          .json({ message: "Please make sure the array has 10 numbers." });
      } else if ([...new Set(input)].length !== input.length) {
        return res.status(400).json({
          message:
            "Please make sure each of the 10 numbers in array is different.",
        });
      } else if (!input.every((i) => i > 0 && i < 100)) {
        return res.status(400).json({
          message:
            "Please make sure each of the 10 numbers in array is between 0 and 100.",
        });
      } else {
        return res.status(200).json({
          sortedNumbers: input.sort((a, b) => a - b),
        });
      }
    } catch (err) {
      return res.status(400).json(err.message);
    }
  };
}

module.exports = SortController;
