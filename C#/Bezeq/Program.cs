using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Bezeq
{
    class Program
    {
        static void Main(string[] args)
        {
            #region ex1
            string str = " Sapien cubilia  tortor Eleifend praesent  cubilia  cubilia tortor Pretium eleifend";
            countWord(str);
            #endregion

            #region ex2
            palindrome("200,02");
            #endregion


        }
        static void countWord(string str)//ex1
        {
            List<countWordObj> countWords = new List<countWordObj>();
            foreach (string item in str.Trim().Split(" ", StringSplitOptions.RemoveEmptyEntries))
            {
                countWordObj wordObj = countWords.Find(w => w.word.ToUpper() == item.ToUpper());
                if (wordObj != null)
                {
                    wordObj.total++;
                }
                else
                {
                    countWords.Add(new()
                    {
                        total = 1,
                        word = item
                    });
                }
            }
            countWords = countWords.OrderByDescending(o => o.total).ToList();
            foreach (countWordObj word in countWords)
            {
                Console.WriteLine("{0},{1}", word.word, word.total);
            }
        }


        static bool palindrome(string str)//ex2
        {
            Regex reg = new Regex(@"[^a-zA-Z0-9/-]+");
            string newStr = reg.Replace(str, "");
            for (int i = 0; i < newStr.Length/2; i++)
            {
                if(newStr[i].ToString().ToUpper() != newStr[newStr.Length - i - 1].ToString().ToUpper())
                {
                    return false;
                }
            }
            return true;
        }

    }

    class countWordObj//ex1
    {
        public int total { get; set; }
        public string word { get; set; }
    }
    #region ex3

    public static class MyExtensions
    {
        public static bool IsTrue(this string str)
        {
            return (str == "1" || str?.ToUpper() == "TRUE");
        }
    }   
    #endregion

}
