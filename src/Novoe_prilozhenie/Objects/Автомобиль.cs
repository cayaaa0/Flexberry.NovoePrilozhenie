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
    /// Автомобиль.
    /// </summary>
    // *** Start programmer edit section *** (Автомобиль CustomAttributes)

    // *** End programmer edit section *** (Автомобиль CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("Автомобиль", new string[] {
            "ГосНомер as \'Гос номер\'",
            "Водитель.ФИО as \'ФИО\'"})]
    [View("Автомобиль", new string[] {
            "ГосНомер as \'Гос номер\'",
            "Водитель as \'Водитель\'",
            "Водитель.ФИО as \'ФИО\'"})]
    [MasterViewDefineAttribute("Автомобиль", "Водитель", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class Автомобиль : ICSSoft.STORMNET.DataObject
    {
        
        private string fГосНомер;
        
        private IIS.Novoe_prilozhenie.Водитель fВодитель;
        
        // *** Start programmer edit section *** (Автомобиль CustomMembers)

        // *** End programmer edit section *** (Автомобиль CustomMembers)

        
        /// <summary>
        /// ГосНомер.
        /// </summary>
        // *** Start programmer edit section *** (Автомобиль.ГосНомер CustomAttributes)

        // *** End programmer edit section *** (Автомобиль.ГосНомер CustomAttributes)
        [StrLen(255)]
        public virtual string ГосНомер
        {
            get
            {
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Get start)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Get start)
                string result = this.fГосНомер;
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Get end)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Set start)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Set start)
                this.fГосНомер = value;
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Set end)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Set end)
            }
        }
        
        /// <summary>
        /// Автомобиль.
        /// </summary>
        // *** Start programmer edit section *** (Автомобиль.Водитель CustomAttributes)

        // *** End programmer edit section *** (Автомобиль.Водитель CustomAttributes)
        [PropertyStorage(new string[] {
                "Водитель"})]
        [NotNull()]
        public virtual IIS.Novoe_prilozhenie.Водитель Водитель
        {
            get
            {
                // *** Start programmer edit section *** (Автомобиль.Водитель Get start)

                // *** End programmer edit section *** (Автомобиль.Водитель Get start)
                IIS.Novoe_prilozhenie.Водитель result = this.fВодитель;
                // *** Start programmer edit section *** (Автомобиль.Водитель Get end)

                // *** End programmer edit section *** (Автомобиль.Водитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Автомобиль.Водитель Set start)

                // *** End programmer edit section *** (Автомобиль.Водитель Set start)
                this.fВодитель = value;
                // *** Start programmer edit section *** (Автомобиль.Водитель Set end)

                // *** End programmer edit section *** (Автомобиль.Водитель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "Автомобиль" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Автомобиль
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Автомобиль", typeof(IIS.Novoe_prilozhenie.Автомобиль));
                }
            }
            
            /// <summary>
            /// "Автомобиль" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Автомобиль2
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Автомобиль", typeof(IIS.Novoe_prilozhenie.Автомобиль));
                }
            }
        }
    }
}
