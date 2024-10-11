class Solution:
    def robotWithString(self, s: str) -> str:
        #Initialize the length of the given word the robot array and the paper answer
        n, suffix, p = len(s), [None] * len(s), ""

        # created a suffix min
        for i in range(n - 1, -1, -1):
            if i == n - 1 or s[i] < suffix[i + 1]:
                suffix[i] = s[i]
            else:
                suffix[i] = suffix[i + 1]
        
        t = []
        
        # operations from s to t and from t to p
        for i in range(n):
            t.append(s[i])

            while t and (i == n - 1 or t[-1] <= suffix[i + 1]):
                p += t.pop()
        
        return p

        
