# Print Configuration Provided By Macro
This problem is designed to help you get familiar with the #if, #elif, #else, #ifend directives of preprocessor.

Suppose there is a configuration header "config.h" that contains three possible configuration values: CONFIG1, CONFIG2, CONFIG3. They can either exist or not exist, if exist, provided by #define directive as a integer.  
Your task is to write code in "solution.c" to print all these configuration values in the format:  
```
CONFIG1: VALUE1
CONFIG2: VALUE2
CONFIG3: VALUE3
```
if the value is not provided, print "NONE" instead.