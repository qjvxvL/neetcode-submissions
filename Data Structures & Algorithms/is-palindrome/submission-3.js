class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = "";
        res = s.split(" ").join("").replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
        for (let i = 0; i < res.length; i++) {
            
        }
        console.log(res)

        return res == res.split("").reverse().join("")
    }
}
