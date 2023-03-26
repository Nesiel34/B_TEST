select S.Name "StudentName", IFNULL(Grade,'') "Grade" 
from Students S
left join StudentGrades SG
on S.Id = SG.StudentId
and SG.CourseId = (Select Id from Courses where Name = 'History')
left join Courses C
on C.Id = SG.CourseId