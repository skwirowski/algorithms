from random import sample


def create_array_of_random_numbers(length):
    """ Creates an array of random numbers

    Args:
        length: length of the created array

    Returns:
        number array of given length
    """
    max_number_value = 99

    return sample(range(0, max_number_value), length)
