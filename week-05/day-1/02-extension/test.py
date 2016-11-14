import unittest
import extend

class TestExtend(unittest.TestCase):
    def setUp(self):
        pass

    def test_add_2_and_3_is_5(self):
        self.assertEqual(extend.add(2, 3), 5)

    def test_add_4_and_1_is_5(self):
        self.assertEqual(extend.add(4, 1), 5)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(5, 10, 3), 10)

    def test_max_of_three_third(self):
        self.assertEqual(extend.max_of_three(3, 4, 5), 5)

    def test_median_four(self):
        self.assertEqual(extend.median([7, 5, 3, 5]), 5)

    def test_median_five(self):
        self.assertEqual(extend.median([1, 2, 3, 4, 5, 6, 10]), 4)

    def test_median_type(self):
        self.assertIsInstance(extend.median([11, 23, 34]), int)

    def test_is_vovel_z(self):
        self.assertFalse(extend.is_vovel('z'))

    def test_is_vovel_capital_a(self):
        self.assertTrue(extend.is_vovel('A'))

    def test_is_vovel_u(self):
        self.assertTrue(extend.is_vovel('u'))

    def test_is_vovel_str(self):
        self.assertRaises(ValueError, extend.is_vovel, 7)

    def test_translate_bemutatkozik(self):
        self.assertEqual(extend.translate('bemutatkozik'), 'bevemuvutavatkovozivik')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kolbice'), 'kovolbiviceve')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kancsalkacsa'), 'kavancsavalkavacsava')



if __name__ == '__main__':
    unittest.main()
