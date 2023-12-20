
// Function to find pairs in the array with the given sum
function findPairWithSum(nums, target) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([nums[i], nums[j]]);
            }
        }
    }
    return result;
}

exports.findPairWithSumHandler = (req, res) => {
    try {
        const { nums, target } = req.body;

        if (!nums || !target || !Array.isArray(nums)) {
            return res.status(400).json({ error: 'Invalid input format.' });
        }

       const pairs = findPairWithSum(nums, target);

        if (pairs.length > 0) {
            return res.json({ message: 'Pairs found', pairs });
        } else {
            return res.json({ message: 'Pairs not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.findPairWithSum = findPairWithSum;
