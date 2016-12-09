import unittest
from number_1_2_3 import divider, line_counter
from number_1_2_3 import Person, HorrorError


class TddTest(unittest.TestCase):
    def test_is_ten_divided_by_five_two(self):
        self.assertEqual(divider(5), 2)
    def test_is_print_fail_if_input_number_zero(self):
        self.assertEqual(divider(0), 'fail')
    def test_is_line_counter_counts_well(self):
        self.assertEqual(line_counter('yolo.txt'), 0)
    def test_is_birth_date_check_raises_error_when_4000(self):
        self.assertRaises(HorrorError, Person, 'Joe', 4007)


if __name__ == '__main__':
    unittest.main()
