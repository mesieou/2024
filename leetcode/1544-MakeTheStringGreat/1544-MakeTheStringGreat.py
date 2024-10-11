class Solution:
    def makeGood(self, s: str) -> str:
        #create a stack
        stack = []
        
        # loop through the string
        for c in s:
            # check if the current string converted to uppercase or lowercase is equal to the last item in the stack
            if stack and c.swapcase() == stack[-1]:
                #remove the last item of the stack
                stack.pop()
            else:
                #add it to the stack
                stack.append(c)
        
        #join the stack
        return ''.join(stack)
