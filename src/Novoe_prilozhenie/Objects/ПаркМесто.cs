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
    /// Парк место.
    /// </summary>
    // *** Start programmer edit section *** (ПаркМесто CustomAttributes)

    // *** End programmer edit section *** (ПаркМесто CustomAttributes)
    [AutoAltered()]
    [Caption("Парк место")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПаркМесто", new string[] {
            "Номер as \'Номер места\'",
            "Статус as \'Статус\'"})]
    [View("ПаркМесто", new string[] {
            "Номер as \'Номер места\'",
            "Статус as \'Статус\'"})]
    public class ПаркМесто : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.Novoe_prilozhenie.Статусы fСтатус;
        
        // *** Start programmer edit section *** (ПаркМесто CustomMembers)

        // *** End programmer edit section *** (ПаркМесто CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ПаркМесто.Номер CustomAttributes)

        // *** End programmer edit section *** (ПаркМесто.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ПаркМесто.Номер Get start)

                // *** End programmer edit section *** (ПаркМесто.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ПаркМесто.Номер Get end)

                // *** End programmer edit section *** (ПаркМесто.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПаркМесто.Номер Set start)

                // *** End programmer edit section *** (ПаркМесто.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ПаркМесто.Номер Set end)

                // *** End programmer edit section *** (ПаркМесто.Номер Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (ПаркМесто.Статус CustomAttributes)

        // *** End programmer edit section *** (ПаркМесто.Статус CustomAttributes)
        public virtual IIS.Novoe_prilozhenie.Статусы Статус
        {
            get
            {
                // *** Start programmer edit section *** (ПаркМесто.Статус Get start)

                // *** End programmer edit section *** (ПаркМесто.Статус Get start)
                IIS.Novoe_prilozhenie.Статусы result = this.fСтатус;
                // *** Start programmer edit section *** (ПаркМесто.Статус Get end)

                // *** End programmer edit section *** (ПаркМесто.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПаркМесто.Статус Set start)

                // *** End programmer edit section *** (ПаркМесто.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (ПаркМесто.Статус Set end)

                // *** End programmer edit section *** (ПаркМесто.Статус Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПаркМесто" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПаркМесто
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПаркМесто", typeof(IIS.Novoe_prilozhenie.ПаркМесто));
                }
            }
            
            /// <summary>
            /// "ПаркМесто" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПаркМесто2
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПаркМесто", typeof(IIS.Novoe_prilozhenie.ПаркМесто));
                }
            }
        }
    }
}
