class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        letters_required = {}
        letters_given = {}
        ans = float('inf')
        for char in 'balloon':
            letters_required[char] = letters_required.get(char, 0) + 1

        for char in text:
            if char in letters_required:
                letters_given[char] = letters_given.get(char, 0) + 1
        
        for key, val in letters_required.items():
            if key in letters_given:

                ans = min(ans, letters_given[key] // val)

            else:
                ans = 0

        return ans
