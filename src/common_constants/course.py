from enum import Enum


class CourseStudyLevel(Enum):
    FirstLevelDegree = "1"
    SecondLevelDegree = "Z"
    DoctorateOfPhilosophy = "R"
    FirstLevelMaster = "M"
    SecondLevelMaster = "N"


class CourseStudyFaculty(Enum):
    Engineering = "3"
    Architecture = "8"
    AllDoctorateOfPhilosophy = "3"


class Language(Enum):
    Ita = "it"

