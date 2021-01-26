using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MilliganNathanielAssignment1.Models
{
    public class CalculationModel
    {
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int assignments { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int projects { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int quizzes { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int exams { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int intex { get; set; }

        //public double score { get; set; }
    }
}
