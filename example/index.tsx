import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Alert, Divider, Icon, Space } from '../src';
import Menu from '../src/components/menu';
import Typography from '../src/components/typography';

const App = () => {
  return (
    <>
      <Divider title="Icon" />
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
      <Divider title="Elevation" />
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
      <Divider title="Alert" />
      <Alert message="normal" closeable />
      <Alert type="success" closeable message="success" actions={[{ text: 'action' }, { text: 'action' }]} />
      <Alert type="warning" message="warning" closeable />
      <Alert type="negative" message="error" closeable />
      <Divider title="Typography" />
      <Space gap={10} align="start" direction="vertical">
        <Typography.Normal size={200}>666888</Typography.Normal>
        <Typography.Normal>666888</Typography.Normal>
        <Typography.Normal>666888</Typography.Normal>
      </Space>
      <Divider title="Menu" />
      <Menu>
        <Menu.Group icon={<Icon.Home />} title="Menu Text">
          <Menu.Item title="aaa" />
          <Menu.Item title="bbb" />
          <Menu.Item title="ccc" />
        </Menu.Group>
        <Menu.Group title="title2">
          <Menu.Item title="ddd" />
          <Menu.Item title="eee" />
          <Menu.Group title="title3">
            <Menu.Item title="fff" />
          </Menu.Group>
        </Menu.Group>
        <Menu.Group icon={<Icon.Home />} title="Menu Text4" />
      </Menu>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
