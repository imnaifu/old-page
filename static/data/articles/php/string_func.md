# List of PHP string function that often used
- **echo**: slightly faster than print   
- **printf**: output a formatted string   

---
- **explode(seperator, string, [limit])**: break a string into an array
- **implode(seperator, array)**: returns a string from the element of arrray   

---
- **html_entity_decode**: decode htmlentities
- **htmlentities**: like htmlspecialchars, but encode more
- **htmlspecialchars_decode**: decode htmlspecialchars
- **htmlspecialchars** (preferable): encode these: (" ' & < >) to (&quot &#039 &amp &lt &gt)   
- **nl2br**: insert HTML line breaks in front of each newline in a string

---
- **ltrim**: remove white space or other characters from left side of string
- **rtrim**: from right side
- **trim**: from both side   

---
- **md5**: calculate the MD5 has of a string
- **md5_file**: calculater the MD5 has of a file   

---
- **money_format**: returns a string formated as a currency string
- **number_format**: format a number with grouped thousands   

---
- **ord**: returns the ASCII value of the first character of string //short for ordinal (顺序的)
- **chr**: returns a character from a specified ASCII value   

---
- **str_replace(find, replace, string, [count])**: replace some character in a string (case-sensitive)
- **str_ireplace(find, replace, string, [count])**: case-insensitive   

---
- **lcfirst**: lowercase first character
- **ucfirst**: convert first character of string into uppercase
- **ucwords**: convert first character of each word in a string into uppercase     

---
- **strtoupper**: convert a string to uppercase letters
- **strtolower**: convert a string to lowercase letters   

---
- **strrev**: reverses a string
- **strpos(string, sub, start=0)**: returns the position of the first occurence of a string inside another string
- **strlen**: returns the length of string   
- **substr(string, start, [end])**: return a part of string   

---
- **addslashes**: returns a string with backslashes in front of single quote, double quote, backslash and NULL
- **stripslashes**: removes backslashes added by the addslashes function   

---
- **str_pad(string, length, [pad_string=' '], [pad_type])**: pad string to a new length
- **str_repeat(string, repeat_time)**: repeate a string a specific number of times
- **str_getcsv(string, [seperator], [enclosure], [escape])**: parse a CSV string into array   
- **str_shuffle**: randomly shuffles all characters in a string
- **str_split**: split a string into array (each character)
- **str_word_count**: count the number of words in a string
- **wordwrap(string, [width], [break], [cut])**: wrap a string into new lines when it reaches a specific length   
