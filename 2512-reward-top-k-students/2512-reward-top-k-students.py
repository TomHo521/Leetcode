class Solution:
    def topStudents(self, positive_feedback: List[str], negative_feedback: List[str], report: List[str], student_id: List[int], k: int) -> List[int]:

        rankings = []
        pos =  set(positive_feedback)
        neg = set(negative_feedback)

        for i in range(len(student_id)):
            student_score = 0
            for word in report[i].split():
                #print(report[i])
                if word in pos:
                     student_score += 3
                if word in neg:
                     student_score -= 1
            rankings.append([student_score, student_id[i]])
            
            

            # if len(rankings) < k:
            #     heapq.heappush(rankings, (-student_score, student_id[i]))
            # else:
            #     heapq.heappushpop(rankings, (-student_score, student_id[i])) 

        
        rankings = sorted(rankings, key = lambda x: (-x[0], x[1]))
        #print(rankings)

        res = []
        for i in rankings[:k]:
            res.append(i[1])


        return res

