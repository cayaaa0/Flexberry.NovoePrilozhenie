﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Novoe_prilozhenie
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Водитель.
    /// </summary>
    // *** Start programmer edit section *** (Водитель CustomAttributes)

    // *** End programmer edit section *** (Водитель CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("Водитель", new string[] {
            "НомерВод as \'ID водителя\'",
            "Телефон as \'Телефон\'",
            "ФИО as \'ФИО\'"})]
    [View("Водитель", new string[] {
            "НомерВод as \'ID водителя\'",
            "Телефон as \'Телефон\'",
            "ФИО as \'ФИО\'"})]
    public class Водитель : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерВод;
        
        private int fТелефон;
        
        private string fФИО;
        
        // *** Start programmer edit section *** (Водитель CustomMembers)

        // *** End programmer edit section *** (Водитель CustomMembers)

        
        /// <summary>
        /// НомерВод.
        /// </summary>
        // *** Start programmer edit section *** (Водитель.НомерВод CustomAttributes)

        // *** End programmer edit section *** (Водитель.НомерВод CustomAttributes)
        public virtual int НомерВод
        {
            get
            {
                // *** Start programmer edit section *** (Водитель.НомерВод Get start)

                // *** End programmer edit section *** (Водитель.НомерВод Get start)
                int result = this.fНомерВод;
                // *** Start programmer edit section *** (Водитель.НомерВод Get end)

                // *** End programmer edit section *** (Водитель.НомерВод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Водитель.НомерВод Set start)

                // *** End programmer edit section *** (Водитель.НомерВод Set start)
                this.fНомерВод = value;
                // *** Start programmer edit section *** (Водитель.НомерВод Set end)

                // *** End programmer edit section *** (Водитель.НомерВод Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Водитель.Телефон CustomAttributes)

        // *** End programmer edit section *** (Водитель.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Водитель.Телефон Get start)

                // *** End programmer edit section *** (Водитель.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Водитель.Телефон Get end)

                // *** End programmer edit section *** (Водитель.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Водитель.Телефон Set start)

                // *** End programmer edit section *** (Водитель.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Водитель.Телефон Set end)

                // *** End programmer edit section *** (Водитель.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Водитель.ФИО CustomAttributes)

        // *** End programmer edit section *** (Водитель.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Водитель.ФИО Get start)

                // *** End programmer edit section *** (Водитель.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Водитель.ФИО Get end)

                // *** End programmer edit section *** (Водитель.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Водитель.ФИО Set start)

                // *** End programmer edit section *** (Водитель.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Водитель.ФИО Set end)

                // *** End programmer edit section *** (Водитель.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "Водитель" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Водитель
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Водитель", typeof(IIS.Novoe_prilozhenie.Водитель));
                }
            }
            
            /// <summary>
            /// "Водитель" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Водитель2
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Водитель", typeof(IIS.Novoe_prilozhenie.Водитель));
                }
            }
        }
    }
}
