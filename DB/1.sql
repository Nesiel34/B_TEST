select * 
from StudentGrades
where StudentId not in(
						select StudentId 
						from StudentGrades 
						where Grade<55
					  )
						
and Grade>=55;