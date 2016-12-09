import unittest
from endre_work import anagramm, count_letters



class TddTest(unittest.TestCase):


# testing anagramm function -----------|
    def test_are_strings_anagramm(self):
        self.assertTrue(anagramm("section", "notices"))

    def test_are_strings_not_anagramm(self):
        self.assertFalse(anagramm("section", "Snoop Lion"))

    def test_anagramm_returns_error_message_if_both_args_not_strings(self):
        self.assertRaises(TypeError, anagramm, 421, 124)

    def test_anagramm_returns_error_message_if_a_arg_not_string(self):
        self.assertRaises(TypeError, anagramm, '421', 124)

    def test_anagramm_returns_error_message_if_b_arg_not_string(self):
        self.assertRaises(TypeError, anagramm, 421, '124')



# testing count_letters function ------|
    def test_is_output_dictionary(self):
        self.assertIsInstance(count_letters("New Horizon"), dict)

    def test_count_letters_returns_error_msg_if_not_string(self):
        self.assertRaises(TypeError, count_letters, 90210)

    def test_count_letters_returns_error_msg_if_not_string(self):
        self.assertEqual(count_letters(" "), {})




if __name__ == '__main__':
    unittest.main()
