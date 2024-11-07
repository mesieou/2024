class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        start = 0
        end = 0
        splitted = list(word)
        for char in splitted:
            #if char matches ch:
            if char == ch:
                #reverse with a while loop
                while start < end:
                    temp = splitted[start]
                    splitted[start] = splitted[end]
                    splitted[end] = temp
                    start += 1
                    end -= 1
                break
            #else move the end pointer
            else:
                end += 1
        return ''.join(splitted)
        
