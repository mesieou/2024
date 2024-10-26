class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        required_letters = {}
        given_letters = {}
        ans = float('inf')
        for char in ransomNote:
            required_letters[char] = required_letters.get(char, 0) + 1
        
        for char in magazine:
            given_letters[char] = given_letters.get(char, 0) + 1
        
        for char in required_letters:
            if char in given_letters:
                print(ans)
                ans = min(ans, (given_letters[char] // required_letters[char]))
                print(ans)
            else:
                ans = 0
            
        return True if  ans != float('inf') and ans > 0 else False
        
