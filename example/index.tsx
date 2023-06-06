import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Icon } from '../src';

const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <Icon.AlarmClock />
        <Icon.AlertFill />
        <Icon.Alert />
        <Icon.Anchor />
        <Icon.Apps />
        <Icon.Archive />
        <Icon.ArrowDownLeft />
        <Icon.ArrowDownRight />
        <Icon.ArrowDown />
        <Icon.ArrowLeft />
        <Icon.ArrowRight />
        <Icon.ArrowUpLeft />
        <Icon.ArrowUpRight />
        <Icon.ArrowUp />
        <Icon.ArrowheadDown />
        <Icon.ArrowheadLeft />
        <Icon.ArrowheadRight />
        <Icon.ArrowheadUp />
        <Icon.Ascending />
        <Icon.Attachment />
        <Icon.Backward />
        <Icon.BatteryCharging />
        <Icon.BatteryEmpty />
        <Icon.BatteryFull />
        <Icon.BatteryLow />
        <Icon.BatteryMedium />
        <Icon.Bell />
        <Icon.Block />
        <Icon.BluetoothOff />
        <Icon.Bluetooth />
        <Icon.Bolt />
        <Icon.Book />
        <Icon.Bookmark />
        <Icon.BorderAll />
        <Icon.BorderBottom />
        <Icon.BorderHorizontal />
        <Icon.BorderInner />
        <Icon.BorderLeft />
        <Icon.BorderRight />
        <Icon.BorderStyle />
        <Icon.BorderTop />
        <Icon.BorderVertical />
        <Icon.Bulb />
        <Icon.CalendarCheck />
        <Icon.CalendarClose />
        <Icon.CalendarEdit />
        <Icon.CalendarMinus />
        <Icon.CalendarPlus />
        <Icon.Calendar />
        <Icon.Camera />
        <Icon.Card />
        <Icon.ChartBarBox />
        <Icon.ChartBar />
        <Icon.ChartLine />
        <Icon.ChartPie />
        <Icon.Chat />
        <Icon.CheckCircleFill />
        <Icon.CheckCircle />
        <Icon.CheckLarge />
        <Icon.CheckSmall />
        <Icon.ChevronDownSmall />
        <Icon.ChevronDown />
        <Icon.ChevronLeftSmall />
        <Icon.ChevronLeft />
        <Icon.ChevronRightSmall />
        <Icon.ChevronRight />
        <Icon.ChevronTopSmall />
        <Icon.ChevronTop />
        <Icon.Clipboard />
        <Icon.Close />
        <Icon.Cloud />
        <Icon.Command />
        <Icon.Comment />
        <Icon.Company />
        <Icon.Compass />
        <Icon.Copy />
        <Icon.Delete />
        <Icon.Descending />
        <Icon.Desktop />
        <Icon.Devices />
        <Icon.Diamond />
        <Icon.Dns />
        <Icon.Download />
        <Icon.DragDropHorizontal />
        <Icon.DragDropVertical />
        <Icon.Edit />
        <Icon.Email />
        <Icon.EmojiBigSmile />
        <Icon.EmojiSad />
        <Icon.EmojiSmile />
        <Icon.ErrorFill />
        <Icon.Error />
        <Icon.Extension />
        <Icon.EyeOff />
        <Icon.Eye />
        <Icon.FileCheck />
        <Icon.FileClose />
        <Icon.FileEdit />
        <Icon.FileMinus />
        <Icon.FilePlus />
        <Icon.File />
        <Icon.Filter />
        <Icon.Flag />
        <Icon.FolderCheck />
        <Icon.FolderClose />
        <Icon.FolderEdit />
        <Icon.FolderMinus />
        <Icon.FolderPlus />
        <Icon.Folder />
        <Icon.FormatAlignCenter />
        <Icon.FormatAlignJustify />
        <Icon.FormatAlignLeft />
        <Icon.FormatAlignRight />
        <Icon.FormatBold />
        <Icon.FormatIndentDecrease />
        <Icon.FormatIndentIncrease />
        <Icon.FormatItalic />
        <Icon.FormatParagraphSpacing />
        <Icon.FormatStrikethrough />
        <Icon.FormatUnderline />
        <Icon.Forward />
        <Icon.FullscreenExit />
        <Icon.Fullscreen />
        <Icon.Function />
        <Icon.Globe />
        <Icon.Heading />
        <Icon.Headphones />
        <Icon.Health />
        <Icon.Heart />
        <Icon.HelpFill />
        <Icon.Help />
        <Icon.Home />
        <Icon.HorizontalAlignCenter />
        <Icon.HorizontalAlignLeft />
        <Icon.HorizontalAlignRight />
        <Icon.Hourglass />
        <Icon.ImageCheck />
        <Icon.ImageClose />
        <Icon.ImageEdit />
        <Icon.ImageMinus />
        <Icon.ImagePlus />
        <Icon.Image />
        <Icon.Images />
        <Icon.Inbox />
        <Icon.InfoCircle />
        <Icon.InfoFill />
        <Icon.Key />
        <Icon.Keyboard />
        <Icon.Label />
        <Icon.Laptop />
        <Icon.LayerAlignBottomCenter />
        <Icon.LayerAlignHorizontal />
        <Icon.LayerAlignLeftCenter />
        <Icon.LayerAlignRightCenter />
        <Icon.LayerAlignTopCenter />
        <Icon.LayerAlignVertical />
        <Icon.LayerThree />
        <Icon.LayerTwo />
        <Icon.LinkBroken />
        <Icon.Link />
        <Icon.ListBullet />
        <Icon.Lock />
        <Icon.LogIn />
        <Icon.LogOut />
        <Icon.Mail />
        <Icon.Map />
        <Icon.MarkerPin />
        <Icon.Menu />
        <Icon.Message />
        <Icon.Mic />
        <Icon.Minus />
        <Icon.Mobile />
        <Icon.MoreHorizontal />
        <Icon.MoreVertical />
        <Icon.Mouse />
        <Icon.Navigation />
        <Icon.Notification />
        <Icon.OpenInNew />
        <Icon.PauseCircle />
        <Icon.Pause />
        <Icon.PhoneCall />
        <Icon.PhoneCallback />
        <Icon.PhoneForwarded />
        <Icon.PhoneIncoming />
        <Icon.PhoneMissed />
        <Icon.PhoneOutgoing />
        <Icon.Phone />
        <Icon.Pin />
        <Icon.Placeholder2 />
        <Icon.Placeholder />
        <Icon.PlayCircle />
        <Icon.Play />
        <Icon.Plugin />
        <Icon.Plus />
        <Icon.Quote />
        <Icon.Redo />
        <Icon.Refresh />
        <Icon.Repeat />
        <Icon.Reply />
        <Icon.Search />
        <Icon.Settings />
        <Icon.Share />
        <Icon.Shield />
        <Icon.ShoppingCart />
        <Icon.SidebarHide />
        <Icon.SidebarShow />
        <Icon.Slider />
        <Icon.Speedmeter />
        <Icon.Star />
        <Icon.Stopwatch />
        <Icon.Suitcase />
        <Icon.Tablet />
        <Icon.Tag />
        <Icon.TargetOff />
        <Icon.Target />
        <Icon.Text />
        <Icon.ThumbDown />
        <Icon.ThumbUp />
        <Icon.Ticket />
        <Icon.TimeClock />
        <Icon.TransactionHorizontal />
        <Icon.TransactionVertical />
        <Icon.Tree />
        <Icon.TrendDown />
        <Icon.TrendUp />
        <Icon.TurnOff />
        <Icon.Tv />
        <Icon.Undo />
        <Icon.UnfoldLess />
        <Icon.UnfoldMore />
        <Icon.Unlock />
        <Icon.Upload />
        <Icon.UserCheck />
        <Icon.UserClose />
        <Icon.UserEdit />
        <Icon.UserMinus />
        <Icon.UserPlus />
        <Icon.User />
        <Icon.Users />
        <Icon.VerticalAlignBottom />
        <Icon.VerticalAlignCenter />
        <Icon.VerticalAlignTop />
        <Icon.VideoCamera />
        <Icon.Video />
        <Icon.ViewBoxes />
        <Icon.ViewColumns />
        <Icon.ViewDashboard />
        <Icon.ViewDay />
        <Icon.ViewLayoutBottom />
        <Icon.ViewLayoutGrid />
        <Icon.ViewLayoutLeft />
        <Icon.ViewLayoutRight />
        <Icon.ViewLayoutTop />
        <Icon.ViewLp />
        <Icon.ViewRows />
        <Icon.ViewSchedule />
        <Icon.ViewSlider />
        <Icon.ViewTable />
        <Icon.Voice />
        <Icon.Voicemail />
        <Icon.VolumeMax />
        <Icon.VolumeMedium />
        <Icon.VolumeMin />
        <Icon.VolumeMute />
        <Icon.Wallet />
        <Icon.WarningFill />
        <Icon.Warning />
        <Icon.WifiOff />
        <Icon.Wifi />
      </div>
      <div style={{ padding: 20, display: 'flex', gap: 100 }}>
        <div className="elevation-top-100" />
        <div className="elevation-top-200" />
        <div className="elevation-top-300" />
        <div className="elevation-top-400" />
      </div>
      <div style={{ padding: 20, display: 'flex', gap: 100 }}>
        <div className="elevation-bottom-100" />
        <div className="elevation-bottom-200" />
        <div className="elevation-bottom-300" />
        <div className="elevation-bottom-400" />
      </div>
      <div>
        <div className="font-strong-25">The quick fox</div>
        <div className="font-strong-50">The quick fox</div>
        <div className="font-strong-75">The quick fox</div>
        <div className="font-strong-100">The quick fox</div>
        <div className="font-strong-200">The quick fox</div>
        <div className="font-strong-300">The quick fox</div>
        <div className="font-strong-400">The quick fox</div>
        <div className="font-strong-500">The quick fox</div>
        <div className="font-strong-600">The quick fox</div>
      </div>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
