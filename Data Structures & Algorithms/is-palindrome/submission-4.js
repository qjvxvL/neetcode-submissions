class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = "";
        res = s.split(" ").join("").replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();

        return res == res.split("").reverse().join("")
    }
}
