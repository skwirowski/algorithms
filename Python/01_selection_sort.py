from helpers import create_array_of_random_numbers

example_array = create_array_of_random_numbers(5)


def find_smallest_element(array):
    """ Finds smallest element in the given array

    Args:
        array: array of numbers

    Returns:
        index of the smallest element from the array

    """

    smallest = array[0]         # holds the smallest value
    smallest_index = 0          # holds index of the smallest value

    for i in range(1, len(array)):
        if array[i] < smallest:
            smallest = array[i]
            smallest_index = i

    return smallest_index


def selection_sort(array):
    """ Sorts array of numbers

    Args:
        array: array of numbers

    Retruns:
        sorted array of numbers

    """
    auxiliary_array = []

    for _ in range(len(array)):
        # finds index of the smallest element in an array
        smallest = find_smallest_element(array)
        # removes the smallest element from the array and appends it to the end of auxiliary_array
        auxiliary_array.append(array.pop(smallest))

    return auxiliary_array


print("SELECTION SORT ALGORITHM")
print("Example unsorted array of numbers: ", example_array)
print("Sorted array of numbers: ", selection_sort(example_array))
