select Name"Student Name",IFNULL((select Grade from StudentGrades SG,Courses C where S.Id = SG.StudentId and CourseId =C.Id and c.Name = 'Math' ),0)"Math Grade" ,avg(Grade)"Average" 
from Students S,StudentGrades G
where S.Id = G.StudentId
group by S.Id