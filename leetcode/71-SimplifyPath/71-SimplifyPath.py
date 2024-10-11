class Solution:
    def simplifyPath(self, path: str) -> str:
        str_splitted = path.split('/')
        stack = []

        for c in str_splitted:
            if c == "..":
                if stack:
                    stack.pop()
            elif c == "" or c == ".":
                pass
            else:
                stack.append(c)
        return f"/{'/'.join(stack)}" 
        
