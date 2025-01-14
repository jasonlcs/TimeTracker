﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using TimeTracker.Helper.Attributes;

namespace TimeTracker.Models.Task
{
    public class UpdateTaskRowOrder
    {
        public Guid OwnerGuid { get; set; }

        /// <summary>
        /// Task guid
        /// </summary>
        public Guid Guid { get; set; }

        [JsonConverter(typeof(DateFormatConverter))]
        public DateTime Date { get; set; }

        public int DisplayOrder { get; set; }
    }
}
