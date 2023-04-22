/**
 * Merge Two Sorted Lists: https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * @param {ListNode} list1 - The head node of the first sorted linked list.
 * @param {ListNode} list2 - The head node of the second sorted linked list.
 * @return {ListNode} - The head node of the merged sorted linked list.
 *
 * @summary
 * This function takes two sorted linked lists as input and returns a new linked list that contains all the nodes from
 * both input lists, sorted in ascending order. The function creates a new dummy head node to start the result list,
 * then iterates through the input lists one node at a time, adding the smaller node to the result list and moving to
 * the next node in that list. The final result list is returned, with the dummy head node removed.
 *
 * Time complexity: O(n), where n is the total number of nodes in the two input lists.
 * Space complexity: O(1), because the function only uses a constant amount of extra space.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeTwoLists = (list1, list2) => {
  let head = new ListNode(0);
  let cur = head;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  if (list1 === null) cur.next = list2;
  if (list2 === null) cur.next = list1;

  return head.next;
};
