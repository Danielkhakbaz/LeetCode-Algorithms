class Solution:
    def isPalindrome(self, s: str) -> bool:
        the_string = ''.join(char for char in s.lower() if char.isalnum())

        for i in range(len(the_string) // 2):
            if the_string[i] != the_string[len(the_string) - 1 - i]:
                return False
        
        return True