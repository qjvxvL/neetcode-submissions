class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function canFinish(k) {
            let hours = 0;

            for (const pile of piles) {
                hours += Math.ceil(pile / k);

                // No need to continue if we already exceed h
                if (hours > h) {
                    return false;
                }
            }

            return true;
        }

        let left = 1;
        let right = Math.max(...piles);
        let answer = right;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (canFinish(mid)) {
                // mid works, so try to find a smaller speed
                answer = mid;
                right = mid - 1;
            } else {
                // mid is too slow
                left = mid + 1;
            }
        }

        return answer;
    }
}