/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

export type ListNode = {
  val: any;
  next: any;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head: ListNode): boolean {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}
export default hasCycle;
